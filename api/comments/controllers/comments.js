'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async create(ctx) {
        let entity;
        
        ctx.request.body = {
            ...ctx.request.body,
            status: null,
            published_at: null
        }

        if (ctx.is('multipart')) {
            const { data, files } = parseMultipartData(ctx);
            entity = await strapi.services.comments.create(data, { files });
        } else {
            entity = await strapi.services.comments.create(ctx.request.body);
        }

        await strapi.plugins['email'].services.email.send({
            to: 'eldridge@eldridgeexpedition.com',
            from : 'notifications@eldridgeexpedition.com',
            subject: 'A New comment has been created!',
            text: `
                The comment #${entity.id} has been created.

                Comment:
                ${entity.content}
            `
        })
        return sanitizeEntity(entity, { model: strapi.models.comments });
    }

};
