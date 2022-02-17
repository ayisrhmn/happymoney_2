export const getHome = async (context: any) => {
  let res = await context.effects.api.getHome();

  if (res?.Success) {
    context.state.home = {...res?.Data};
  }
};
