import React, {useState} from 'react';

import MenuItem from '../menu-item/menu-item.component';
import DIRECTORY_DATA from "./data.directory";

import './directory.styles.scss';

const Directory = () => {
  const [section, setSection] = useState(DIRECTORY_DATA);

    return (
        <div className='directory-menu'>
            { section.map( ( { id, ...otherSectionProps } ) => (
                <MenuItem key={ id } { ...otherSectionProps } />
            ) ) }
        </div>
    );
};

export default Directory;
