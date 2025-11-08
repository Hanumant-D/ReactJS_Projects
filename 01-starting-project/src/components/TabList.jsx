import '../index.css';

export default function TabList({children, onClick,isSelected}) {
    return (
       <li className="tab-item">
                <button className={isSelected?"active":''} onClick={onClick}>{children}
                    
                </button>
            </li>
    )
}