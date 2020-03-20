export const FONTS = {
    PRIMARY: 'Raleway, sans-serif;',
    SECONDARY: 'Playfair Display, serif',
}

export const COLORS = {
    LIGHTEST: '#FFFFFF',
    LIGHTER: '#F6F6F6',
    LIGHT: '#EDEDED',
    DARKEST: '#000000',
    DARKER: '#4A4A4A',
    DARK: '#D0D0D0',
    PRIMARY: '#D52B1E',
    SECONDARY: '#333333',
    ALPHA40: 'rgba(25,25,25,0.40)',
    TRANSPARENT: 'transparent',
    ACCENT: '#F77825',
}

export const brandStyles = {
    colorPrimary: COLORS.PRIMARY,
    colorSecondary: COLORS.SECONDARY,
    colorAccent: COLORS.ACCENT,

    colorBodyFont: COLORS.DARKER,
    colorBodyFontAlt: COLORS.DARKEST,
    colorFontSecondary: COLORS.LIGHTEST,
    colorFontAccent: COLORS.ACCENT,
    colorFontDisabled: COLORS.DARK,
    colorIntroHeaderFont: COLORS.DARKEST,
    colorFontLink: COLORS.ACCENT,

    colorBackgroundLight: COLORS.LIGHTEST,
    colorBackgroundContrast: COLORS.LIGHT,
    colorBackgroundDisabled: COLORS.DARK,
    colorBackgroundDark: COLORS.DARKEST,
    colorBackgroundAccent: COLORS.ACCENT,

    colorBoxShadowBase: COLORS.ALPHA40,
    colorBoxShadowLight: COLORS.DARKER,

    borderColorLight: COLORS.LIGHTEST,
    borderColorBase: COLORS.DARK,
    borderColorDark: COLORS.DARKEST,
    borderColorMedium: COLORS.DARKER,
    borderColorAccent: COLORS.ACCENT,

    borderDarkest: `solid 2px ${COLORS.DARKEST}`,
    borderDarker: `solid 2px ${COLORS.DARKER}`,
    borderAccent: `solid 2px ${COLORS.ACCENT}`,
    borderBase: `solid 2px ${COLORS.DARK}`,
    borderTransparent: `solid 2px ${COLORS.TRANSPARENT}`,
    borderRadius: `4px`,

    fontBaseSize: '100%',
    fontSizeIllegible: '0.563em',
    fontSizeSmall: '0.75em',
    fontSizeBody: '1em',
    fontSizeLarge: '1.333em',
    fontSizeLarger: '1.777em',
    fontSizeLargest: '2.369em',
    fontSizeHeader: '3.157em',
    fontSizeGiant: '4.209em',

    lineHeightMedium: '20px',
    lineHeightLarger: '28px',
    lineHeightLargest: '36px',
    lineHeightGiant: '42px',

    fontFamilyPrimary: FONTS.PRIMARY,
    fontFamilySecondary: FONTS.SECONDARY,

    boxShadow: '0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02)',
    boxShadowInset: 'inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05)',

}


/*
    BREAKPOINTS
 */

export const breakpoint = {
    xs: '320px',
    sm: '544px',
    md: '768px',
    lg: '991px',
    xl: '1200px',
}


/*      
    SPATIAL DESIGN SYSTEM
    (Taken from the Carbon Design System: carbondesignsystem.com/guidelines/spacing/#spacing-scale)

    SPACING SCALE
    Used for smaller, more refined spacing needs, specifically within the context of a component 
    (i.e. the space between a label and a text input).

    Use the spacing scale when building individual components. 
    It includes small increments needed to create appropriate spatial relationships for detail-level designs.
    
*/

export const spacingUnit = {
    _01: '0.125rem', 
    _02: '0.25rem',
    _03: '0.5rem',   
    _04: '0.75rem', 
    _05: '1rem', 
    _06: '1.5rem',
    _07: '2rem',     
    _08: '2.5rem', 
    _09: '3rem',      
}

/*
    LAYOUT SCALE
    Typically used for positioning components on a page (i.e., the space between a text field and a selector).

    The layout scale is used for arranging components and other UI parts into a full page layout. 
    It has larger increments that are used to control the density of a design. 
    Use the smaller layout tokens to create more dense compositions and direct relationships. 
    Use the larger tokens to increase the amount of white space and to disassociate sections.

*/

export const layoutUnit = {
    _01: '1rem',
    _02: '1.5rem',
    _03: '2rem',
    _04: '3rem',
    _05: '4rem',
    _06: '6rem',
    _07: '10rem',
}