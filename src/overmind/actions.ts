export const getUserInfo = async (context: any) => {
  let res = await context.effects.api.getUserInfo();

  if (res?.Success) {
    context.state.userInfo = {...res?.Data};
  }
};
