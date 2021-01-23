// eslint-disable-next-line no-unused-vars
import react from 'react';

function HtmlLink(props) {
  const { href, className, content } = props;
  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
}

export default HtmlLink;
