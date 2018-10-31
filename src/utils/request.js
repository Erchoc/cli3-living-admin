/**
 * Author: Erchoc(erchoc@163.com)
 * Date: 2018/10/31
 * Desc: Request
 */

import Axios from 'axios';

import { Message } from 'element-ui';
import Store from '@/store';

// Create an axios instance
const service = Axios.create({
  baseUrl: process.env.BASE_API,
  timeout: 5000
});

// Request interceptor
service.interceptors.request.use();

// Response interceptor
service.interceptors.response.use();

export default service;
