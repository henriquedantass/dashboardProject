import { useRouter } from 'next/dist/client/router';
import Link , {LinkProps} from 'next/link';
import { cloneElement, ReactElement} from 'react';


interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shoudMathExactHref?: boolean;
}

export function  ActiveLink({ shoudMathExactHref = false ,children, ...rest}:ActiveLinkProps) {
  let isActive = false;

  const {asPath} = useRouter()

  if ( shoudMathExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if(!shoudMathExactHref && (asPath.startsWith(String(rest.href))
  || asPath.startsWith(String(rest.as)))) {
    isActive = true;
  } 

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.80'
      })}
    </Link>
  );
}