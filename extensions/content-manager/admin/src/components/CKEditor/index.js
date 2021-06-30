import React from 'react';
import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';
// import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';
import styled from 'styled-components';
import { CloudinaryUnsigned } from 'puff-puff/CKEditor';
// import Markdown from '@ckeditor/ckeditor5-markdown-gfm'

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

function imagePluginFactory (editor) {
  editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
    return new CloudinaryUnsigned(loader, "dotaknivz", "jncqglx0", [ 160, 500, 1000, 1052 ]);
  };
}

const Editor = ({ onChange, name, value }) => {
  return (
    <Wrapper>
      <CKEditor
        placeholder="Enter Content"
        editor={CustomEditor}
        data={value}
        config={{
          extraPlugins: [imagePluginFactory],
          // plugins: [ Image, ImageToolbar, ImageCaption, ImageStyle, ImageResize, LinkImage ],
          
          toolbar: {
            items: [
              'heading',
              '|',
              'fontSize',
              'bold',
              '|',
              'italic',
              'horizontalLine',
              'underline',
              '|',
              'bulletedList',
              'numberedList',
              '|',
              'alignment',
              'indent',
              'outdent',
              '|',
              'link',
              'imageUpload',
              'blockQuote',
              'insertTable',
              'mediaEmbed',
              'undo',
              'redo'
            ]
          },
          table: {
            contentToolbar: [
              'tableColumn',
              'tableRow',
              'mergeTableCells'
            ]
          },
          image: {
            // Configure the available image resize options.
            resizeOptions: [
                {
                    name: 'imageResize:original',
                    label: 'Original',
                    value: null
                },
                // {
                //   name: 'imageResize:45',
                //   label: '45%',
                //   value: '45'
                // },
                {
                    name: 'imageResize:50',
                    label: '50%',
                    value: '50'
                },
                {
                    name: 'imageResize:75',
                    label: '75%',
                    value: '75'
                }
              ],
              
              styles: [
                'alignLeft', 'alignCenter', 'alignRight'
              ],

              // You need to configure the image toolbar, too, so it shows the new style
              // buttons as well as the resize buttons.
              toolbar: [
                  'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
                  '|',
                  'imageResize',
                  '|',
                  'imageTextAlternative'
              ]
          }
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
        }}
      />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;