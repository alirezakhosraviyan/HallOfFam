import { ApiCall } from '../../../api/networking/APICall';
import {LOAD_HALL_OF_FAM} from "../types";
import conf from '../../../../config';

export const loadHallOfFams = () => {
  return ApiCall(
      {
        type: LOAD_HALL_OF_FAM,
        request: {
          url: '/api/v1/services/load_services/',
          method: 'GET',
        },
      },
      {
        test: conf.env === 'development' && true,
        success: {
          data: {},
        },
        fail: {},
      },
  );
};