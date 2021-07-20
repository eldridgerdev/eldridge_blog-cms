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

        // await strapi.plugins['email'].services.email.send({
        //     to: 'eldridge@eldridgeexpedition.com',
        //     from : 'eldridge@eldridgeexpedition.com',
        //     subject: 'A New comment has been created!',
        //     text: `
        //         The comment #${entity.id} has been created.

        //         Comment:
        //         ${entity.content}
        //     `
        // })

        // const sendTo = process.env.EMAIL_ADDRESS_FROM
        // strapi.log.debug(`${JSON.stringify(ctx.request.body)}`)
        // strapi.log.debug(`Trying to send an email to ${sendTo}`)
    
        // try {
        //   const emailOptions = {
        //     to: sendTo,
        //     subject: 'This is a test',
        //     html: `<h1>Welcome!</h1><p>This is a test HTML email.</p>`,
        //   }
        //   await strapi.plugins['email'].services.email.send(emailOptions)
        //   strapi.log.debug(`Email sent to ${sendTo}`)
        // //   ctx.send({ message: 'Email sent' })
        // } catch (err) {
        //   strapi.log.error(`Error sending email to ${sendTo}`, err)
        // //   ctx.send({ error: 'Error sending email' })
        // }


        return sanitizeEntity(entity, { model: strapi.models.comments });
    }

};
