const ContentWrap = ({
  title,
  titleImage,
  subtitle,
  btText,
  btLink,
  children,
}) => {
  return (
    <div className="content-wrap">
      <h2>{titleImage ? <img src={titleImage} /> : title}</h2>
      <p>{subtitle}</p>
      {children}
      <div className="content-link">
        <a href={btLink}>{btText}</a>
      </div>
    </div>
  );
};
export default ContentWrap;
