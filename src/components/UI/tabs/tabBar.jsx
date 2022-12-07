import React from 'react';

const TabBar = ({tabs}) => {
    return (
        <div>
            {tabs.map((tab) =>
                <div>
                    <div>
                        {tab.name}
                    </div>
                    <div>
                        {tab.content}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TabBar;