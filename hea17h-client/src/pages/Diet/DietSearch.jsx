import React from 'react';
import styled from 'styled-components';
import SearchPage from '../Search/SearchPage';


function DietSearch() {
    return(
        <Container>
            <Main>
                <Header>
                    <Div className="margin-bottom">
                        <H2>
                            Search<Green>.</Green>
                            <br /> 닭가슴살 200g<Orange>.</Orange>
                            <br /> 토마토 5개<Orange>.</Orange>
                        </H2>
                    </Div>
                    <SearchPage />
                </Header>
            </Main>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #f7f7f9;
    padding: 8vw 10vw;
`;

const Main = styled.div`
    position: relative;
    background: #fff;
    padding: 5vw 8vw;
`;

const Header = styled.div`
    position: relative;
    margin-bottom: 6rem;
    z-index: 10;
`;

const Div = styled.div``;

const H2 = styled.h2`
    font-size: 2.5rem;
    line-height: 3.8rem;

    &:first-child {
        margin-bottom: 3rem;
    }
`;

const Green = styled.span`
    color: #51cf66;
`;

const Orange = styled.span`
    color: #FD7E14;
`;

export default DietSearch;