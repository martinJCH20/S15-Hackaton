import Actions from '../Resource/Actions';

const setRegisterSuccess = (data) => {
  return {
    type: Actions.SET_REGISTER_SUCCES,
    data,
  };
};

const getRegisterSuccess = (data) => {
  return {
    type: Actions.GET_REGISTER_SUCCES,
    data,
  };
};

const setRegisterUser = (data) => {
  return async (dispatch, getState) => {
    const users = await getState().registerReducer.user;
    // console.warn('setRegisterUser', products);
    // console.warn('setRegisterUser data', data);
    if (users.length >= 0) {
      let usersRegister = [...users, data];
      dispatch(setRegisterSuccess(usersRegister));
    }
  };
};

const getRegisterUser = () => {
  return async (dispatch, getState) => {
    const users = await getState().registerReducer.cart;
    dispatch(getRegisterSuccess(users));
  };
};

export default {
  setRegisterUser,
  getRegisterUser,
};