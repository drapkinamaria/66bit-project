import '../../../StyleSheets/management.css'
import '../../../StyleSheets/profile.css'
import '../../../StyleSheets/tasks.css'
import {useState} from "react";

const Management = (props) => {
    const names = [
        { id: 1, firstName: 'Иван', lastName: 'Иванов', patronymic: 'Иванович', position: 'Инженер'},
        { id: 2, firstName: 'Петр', lastName: 'Петров', patronymic: 'Петрович', position: 'Дизайнер'},
        { id: 3, firstName: 'Сергей', lastName: 'Сергеев', patronymic: 'Сергеевич', position: 'Менеджер'},
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const [showFullList, setShowFullList] = useState(true);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setShowFullList(false);
    };

    const handleShowFullList = () => {
        setSearchQuery('');
        setShowFullList(true);
    };

    const groupedNames = {};

    names.forEach((name) => {
        const firstLetter = name.lastName.charAt(0).toUpperCase();
        if (!groupedNames[firstLetter]) {
            groupedNames[firstLetter] = [];
        }
        groupedNames[firstLetter].push(name);
    });

    const filteredNames = showFullList
        ? names
        : names.filter((name) => {
            const fullName = `${name.lastName} ${name.firstName} ${name.patronymic}`.toLowerCase();
            return fullName.includes(searchQuery.toLowerCase());
        });

    const hasMatchingNames = Object.keys(groupedNames).some((letter) =>
        filteredNames.some((name) =>
            name.lastName.charAt(0).toUpperCase() === letter && name.lastName.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <main className="main-part">
            <div className="data_white_container">
                <input
                    className="search"
                    type="text"
                    placeholder="Поиск"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="data_white_container">
                {Object.keys(groupedNames).map((letter) => {
                    const hasMatchingNames = filteredNames.some(
                        (name) =>
                            name.lastName.charAt(0).toUpperCase() === letter &&
                            name.lastName.toLowerCase().includes(searchQuery.toLowerCase())
                    );

                    return hasMatchingNames ? (
                        <div key={letter}>
                            <h2>{letter}</h2>
                            <div>
                                {filteredNames
                                    .filter(
                                        (name) =>
                                            name.lastName.charAt(0).toUpperCase() === letter &&
                                            name.lastName.toLowerCase().includes(searchQuery.toLowerCase())
                                    )
                                    .map((name) => (
                                        <div key={name.id}>
                                            <div>{name.lastName} {name.firstName} {name.patronymic}</div>
                                            <div>{name.position}</div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ) : null;
                })}
                <button className="show_full_list" onClick={handleShowFullList} disabled={showFullList}>
                    Показать весь список
                </button>
            </div>
        </main>
    );
}

export default Management;