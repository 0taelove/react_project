import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MenuBox = styled.nav``;

const MainMenu = () => {
    const { t } = useTranslation();

    return (
    <MenuBox>
        <NavLink to="/news" className={({isActive}) => className({ on: isActive })}
        >
        {this('뉴스')}
        </NavLink>
    </MenuBox>
    );
};

export default React.memo(MainMenu);