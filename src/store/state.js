export const STORAGE_KEY = 'example-vue-project'

let DEV_API;
if (process.env.NODE_ENV == "production") {
  DEV_API = '';
} else {
  DEV_API = 'http://localhost:3000';
}

export const state = {
  DEV_API,
  currentModal: ''
};
