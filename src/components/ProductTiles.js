import React from 'react'
import styled from 'styled-components'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const Tile = styled.div`
    align-items: stretch;
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    min-height: min-content;
    @media print, screen and (min-width: 769px) {
        display: flex;
    }
`;

const TileAncestor = styled(Tile)`
    margin-left: -.75rem;
    margin-right: -.75rem;
    margin-top: -.75rem;
    &:not(:last-child) {
        margin-bottom: .75rem;
    }
`;

const TileParent = styled(Tile)`
    padding: .75rem;
`;

const TileChild = styled(Tile)`
    margin: 0;
`;

const TileParentVertical = styled(Tile)`
    padding: .75rem;
    flex-direction: column;
`;

const TileVertical = styled(Tile)`
    flex-direction: column;
`;

const StyledProductTiles = styled.div`
    align-items: stretch;
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    min-height: min-content;
    margin-left: -.75rem;
    margin-right: -.75rem;
    margin-top: -.75rem;
    &:not(:last-child) {
        margin-bottom: .75rem;
    }
    @media print, screen and (min-width: 769px) {
        display: flex;
    }
    div {
        flex-direction: column;
    }
`;

const ProductTiles = (props) => {
    return (
        <TileAncestor>
            <TileVertical>
                <Tile>
                    <TileParentVertical>
                        <TileChild as="article">
                            <PreviewCompatibleImage imageInfo={props.image1} />
                        </TileChild>
                    </TileParentVertical>
                    <TileParent>
                        <TileChild as="article">
                            <PreviewCompatibleImage imageInfo={props.image2} />
                        </TileChild>
                    </TileParent>
                </Tile>
                <TileParent>
                    <TileChild as="article">
                        <PreviewCompatibleImage imageInfo={props.image3} />
                    </TileChild>
                </TileParent>
            </TileVertical>
        </TileAncestor>
    )
}

export default ProductTiles;