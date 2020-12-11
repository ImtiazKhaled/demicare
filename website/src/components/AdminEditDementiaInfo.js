import React from "react";

import { useDementia, useDementiaUpdate } from '../context/DementiaContext'
import AdminEditDementiaInfoCard from './AdminEditDementiaInfoCard';

function AdminEditDementiaInfo() {

    const dementia = useDementia().sort((a, b) => a.title.localeCompare(b.title));
    const updateDementia = useDementiaUpdate();

    React.useEffect(() => {
        updateDementia()
    })

    return (
        <div className="dementia-container">
            {/* <FlexGrid flexGridColumnCount={[1, 1, 1, 3]} flexGridRowGap="scale900"> */}
            {dementia.map((dementia) => (
                <AdminEditDementiaInfoCard key={dementia.id} {...dementia} />

            ))}
            {/* </FlexGrid> */}
        </div>
    )
}

export default AdminEditDementiaInfo
