import { DotWave } from '@uiball/loaders';

export function Loading() {
  return (
    <>
      <section className="flex items-center justify-center h-screen">
        <DotWave size={97} speed={1} color="yellow" />
      </section>
    </>
  );
}
