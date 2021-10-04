import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Card = styled.div((props) => ({
  ...(props?.theme?.card || {
    display: 'flex',
    width: '100%',
    padding: '.2rem',
    marging: '10px',
    boxShadow: '3px 7px 5px 0px #CECECE',
    flexDirection: 'row',
    backgroundColor: '#fff',
  }),
}));
export const CardHeader = styled.div((props) => ({
  ...(props?.theme?.card?.header || {
    display: 'flex',
    width: '100%',
    padding: '.2rem',
    marging: '10px',
    boxShadow: '3px 7px 5px 0px #CECECE',
  }),
}));
export const CardContent = styled.div((props) => ({
  ...(props?.theme?.card?.content || {
    display: 'flex',
    width: '100%',
    padding: '.2rem',
    marging: '10px',
    boxShadow: '3px 7px 5px 0px #CECECE',
  }),
}));
export const CardContentImage = styled.div((props) => ({
  ...(props?.theme?.card?.contentImage || {
    display: 'flex',
    width: '100%',
    padding: '.2rem',
    marging: '10px',
  }),
}));
export const CardDescription = styled.div((props) => ({
  ...(props?.theme?.card?.cardDescription || {
    display: 'flex',
    padding: '6px',
    width: '100%',
    fontSize: '14px',
    fontWeight: 300,
  }),
}));
export const CardFooter = styled.div((props) => ({
  ...(props?.theme?.card?.footer || {
    display: 'flex',
    width: '100%',
    fontWeight: 300,
    padding: '.2rem',
    marging: '10px',
  }),
}));

export const CardWidget = ({
  header,
  description,
  footer,
  showFooter,
  imageUrl,
  btnAction,
  onClick,
  style,
  className,
  children,
}) => (
  <Card onClick={onClick} style={style} className={className}>
    {imageUrl && (
      <CardContentImage>
        <img src={imageUrl} alt="" />
      </CardContentImage>
    )}
    <CardContent>
      {header ||
        (btnAction && (
          <CardHeader>
            <h2>{header}</h2>
            {btnAction}
          </CardHeader>
        ))}
      {description && <CardDescription>{description}</CardDescription>}
      {children}
      {showFooter && <CardFooter style={{ textAlign: 'center' }}>{footer}</CardFooter>}
    </CardContent>
  </Card>
);

CardWidget.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.any), PropTypes.node]),
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.string,
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  showFooter: PropTypes.bool,
  imageUrl: PropTypes.string,
  btnAction: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
};

CardWidget.defaultProps = {
  children: null,
  header: null,
  description: '',
  footer: null,
  showFooter: false,
  imageUrl: '',
  btnAction: null,
  onClick: () => {},
  style: null,
  className: '',
};
