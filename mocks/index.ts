export const setupMocks = async () => {
  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen();
  } else {
    const { worker } = await import('./browser');
    worker.start();

    (window as any).__mswStop = worker.stop;
    (window as any).__mswStart = worker.start;
  }
};
