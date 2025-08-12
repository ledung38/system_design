export const delay = (data: any, ms: number = 300): Promise<any> =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));
