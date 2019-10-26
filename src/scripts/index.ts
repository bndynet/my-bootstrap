export function checkDependencies(args: string[]) {
  args.forEach((arg: any) => {
    if (!window || typeof (window as any)[arg] === 'undefined') {
      throw new ReferenceError(`Requires ${arg}!!!`);
    }
  });
}