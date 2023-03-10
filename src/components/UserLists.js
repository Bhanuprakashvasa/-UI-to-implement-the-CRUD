import { CreateList } from './CreateList';

export function UserLists({ finalList, viewuser, setList }) {
    return (
        <div className="User-list container bg-lighter mt-3">
        <h1>Users Lists </h1>
            {(finalList.length > 0) ? <table className="table table-striped">
                <thead>
                    <tr>
                        <th>s.no</th>
                        <th>Id no.</th>
                        <th>Name</th>
                        <th>Place</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <CreateList finalList={finalList} setList={setList}/>
            </table> :  <table className="table table-striped">
                <thead>
                    <tr>
                        <th>s.no</th>
                        <th>Id no.</th>
                        <th>Name</th>
                        <th>Place</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={4}>No Users</td>
                    </tr>
                </tbody>
            </table>}
        </div>
    )
}