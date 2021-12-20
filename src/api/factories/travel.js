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
  getAddressData(lat, lng) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDS8ucvBw36czfxSFiK7dY1y2YQDNNkImw`)
  },
  getImageTravelData(id) {
    return axios.get(`${AUTH_URL}image/travel_data?id=${id}`);
  }
});