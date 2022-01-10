import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/authentication.js';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';

const imageUploader = new ImageUploader();
const cardRepository = new CardRepository();
const authService = new AuthService();
const FileInput = memo(props => {
  return <ImageFileInput {...props} imageUploader={imageUploader} />
})

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} cardRepository={cardRepository} />
  </React.StrictMode>,
  document.getElementById('root')
);


