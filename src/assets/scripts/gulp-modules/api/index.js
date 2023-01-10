import axios from 'axios';
import { mockDataConstruction, mapMock, galleryMock } from './mock';

const baseUrl = '/wp-admin/admin-ajax.php';
const isDev = window.location.href.match('localhost');

export const getMarkers = () => (isDev ? Promise.resolve({ data: mapMock }) : axios.post(baseUrl, { action: 'map' }));

