export const getWelcome = async (context: any) => {
  let res = await context.effects.api.getWelcome();

  if (res?.Success) {
    context.state.welcome = res?.Data;
  }
};
