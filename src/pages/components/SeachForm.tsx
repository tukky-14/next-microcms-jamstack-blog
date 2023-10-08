import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

type SearchFormProps = {
    handleSearchChange?: (e: any) => void;
};

const SeachForm = (props: SearchFormProps) => {
    const { handleSearchChange } = props;

    return (
        <div className="flex sm:order-2">
            <div className="relative hidden sm:block">
                <div className="absolute inset-y-0 -top-2 left-0 flex items-center pl-3 pointer-events-none">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <input
                    type="text"
                    id="search-navbar"
                    className="mb-2 block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    onChange={handleSearchChange}
                />
            </div>
        </div>
    );
};

export default SeachForm;
