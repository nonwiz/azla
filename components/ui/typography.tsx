interface TypographyProps {
  children?: React.ReactNode | string;
  className?: string;
}

const parseId = (children: React.ReactNode | string) => {
  return children?.toString().split(" ").join("-").toLocaleLowerCase();
};

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1
      id={parseId(children)}
      className={
        className || "scroll-m-20 text-4xl font-extrabold tracking-tight"
      }
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2
      id={parseId(children)}
      className={
        className +
        ` scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0`
      }
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: TypographyProps) {
  const newLocal =
    className + " scroll-m-20 text-2xl font-semibold tracking-tight";
  return (
    <h3 id={parseId(children)} className={newLocal}>
      {children}
    </h3>
  );
}

export function TypographyH4({ children }: TypographyProps) {
  return (
    <h4
      id={parseId(children)}
      className="scroll-m-20 text-xl font-semibold tracking-tight"
    >
      {children}
    </h4>
  );
}

export function TypographyP({ children, className }: TypographyProps) {
  return (
    <p className={"leading-7 [&:not(:first-child)]:mt-2 " + className}>
      {children}
    </p>
  );
}

export function TypographyBlockquote({ children }: TypographyProps) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}

export function TypographyList({ children }: TypographyProps) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <>{children}</>
    </ul>
  );
}

export function TypographyLarge({ children, className }: TypographyProps) {
  const newLocal = "text-lg font-semibold " + className;
  return <div className={newLocal}>{children}</div>;
}

export function TypographySmall({ children, className }: TypographyProps) {
  return (
    <small className={"text-sm font-medium leading-none " + className}>
      {children}
    </small>
  );
}

export function TypographyMuted({ children, className }: TypographyProps) {
  return (
    <p className={"text-sm text-muted-foreground " + className}>{children}</p>
  );
}
