import {
  AUTH_URL
} from '@/shared/constants';

export default axios => ({
  getVideoData() {
    return axios.get(`${AUTH_URL}video/data`);
  },
  uploadVideoData(payload) {
    return axios.post(`${AUTH_URL}video/upload`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
  },
  /* getMetaVideo(payload) {
    return axios.get(`${AUTH_URL}video/meta_video/${payload}`)
  } */
  getMetaData(payload) {
    return axios.post(`${AUTH_URL}video/meta_video`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
  },
  getImageData() {
    return axios.get(`${AUTH_URL}image/data`);
  },
  getAddressData() {
    var config = {
      method: 'get',
      url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=44.4647452,7.3553838&key=AIzaSyDS8ucvBw36czfxSFiK7dY1y2YQDNNkImw', //the rest of your url
      secure: false //important
    };
    return axios(config)
  }
});