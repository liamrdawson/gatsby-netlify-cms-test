import React from 'react'
import styled from 'styled-components'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import PropTypes from 'prop-types'

const TilesGrid = styled.div`
    margin-bottom: 3rem;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    &:not(:last-child) {
        margin-bottom: .75rem;
    }
    @media print, screen and (min-width: 495px) {
        grid-template-rows: 1fr auto;
        grid-template-columns: 1fr 1fr;
    }
`;

const TileLarge = styled.article`
    @media print, screen and (min-width: 495px) {
        grid-column: 1 / span 2;
    }
`;

const TileSmall = styled.article`
    @media print, screen and (min-width: 769px) {
        margin-bottom: 3rem;
    }
`;

const ProductTiles = (main) => {
    return (
        <TilesGrid>
            <TileLarge>
                <PreviewCompatibleImage imageInfo={main.imageInfo.image1} />
            </TileLarge>
            <TileSmall>
                <PreviewCompatibleImage imageInfo={main.imageInfo.image2} />
            </TileSmall>
            <TileSmall>
                <PreviewCompatibleImage imageInfo={main.imageInfo.image3} />
            </TileSmall>
        </TilesGrid>
    )
}

export default ProductTiles;

ProductTiles.propTypes = {
    main: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
        image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
}