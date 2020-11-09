import React from "react";

import { useDementia, useDementiaUpdate } from '../context/DementiaContext'
import { Card } from 'baseui/card';
import AdminEditDementiaInfoCard from './adminEditDementiaInfoCard';

function AdminEditDementiaInfo() {

    const dementia = useDementia();
    const updateDementia = useDementiaUpdate();

    React.useEffect(() => {
        updateDementia()
    }, [])

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
