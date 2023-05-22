import '../../../StyleSheets/create_acc2.css'
import '../../../StyleSheets/create_acc1.css';
import '../../../StyleSheets/data.css'
import '../../../StyleSheets/management.css'
import '../../../StyleSheets/profile.css'

const Management = (props) => {
    return (
        <div className="main-content-container-wrapper">
            <div className="white-container">
                <div className="search-container">
                    <input className="search" placeholder="Поиск"></input>
                </div>
                <div className="select-container">
                    <select className="select">
                        <option>алфавиту</option>
                        <option>должности</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Management;
