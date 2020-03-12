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
    ACCENT: '#0088CE',
}

export default {
    colorPrimary: COLORS.PRIMARY,
    colorSecondary: COLORS.SECONDARY,

    colorBodyFont: COLORS.DARKER,
    colorBodyFontAlt: COLORS.DARKEST,
    colorFontSecondary: COLORS.LIGHTEST,
    colorFontDisabled: COLORS.DARK,
    colorIntroHeaderFont: COLORS.DARKEST,
    colorFontLink: COLORS.ACCENT,

    colorBackgroundLight: COLORS.LIGHTEST,
    colorBackgroundContrast: COLORS.LIGHT,
    colorBackgroundDisabled: COLORS.DARK,
    colorBackgroundDark: COLORS.DARKEST,

    colorBoxShadowBase: COLORS.ALPHA40,
    colorBoxShadowLight: COLORS.DARKER,

    borderColorLight: COLORS.LIGHTEST,
    borderColorBase: COLORS.DARK,
    borderColorDark: COLORS.DARKEST,
    borderColorMedium: COLORS.DARKER,

    borderDark: `solid 1px ${COLORS.DARKEST}`,

    fontBaseSize: '100%',
    fontSizeIllegible: '0.563em',
    fontSizeSmall: '0.75em',
    fontSizeMedium: '1em',
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

}