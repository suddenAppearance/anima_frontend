import React from 'react';

const UserGuide = () => {

    return (<div>
        <h3>О платформе:</h3>
        <p>
            Данная платформа является результатом ВКР студента КФУ, ИТИС Кузоватова Дамира Рашидовича.
            <br/>
            <br/>
            Платформа позволяет копировать 3D модели на желаемую
        </p>
        <h3>Дополнительно</h3>
        <p>
            Данная платформа не имеет никаких лицензий, ничего не гарантирует и является проектом без всеобщей цели.
            <br/>
            <br/>
            Исходный код платформы доступен по следующим ссылкам:
            <br/>
            <a style={{color: 'blue', paddingLeft: '10px'}}
               href="https://github.com/suddenAppearance/anima_frontend"> Anima Frontend</a>
            <br/>
            <a style={{color: 'blue', paddingLeft: '10px'}}
               href="https://github.com/suddenAppearance/anima_backend"> Anima Backend</a>
        </p>

    </div>);
};

export default UserGuide;