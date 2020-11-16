import React from 'react';
import AdvanceGym from '../AdvanceGym/AdvanceGym';
import ClassSchedule from '../ClassSchedule/ClassSchedule';
import Footer from '../Footer/Footer';


// -------ADVANCE GYM PAGE-----

const AdvanceGymPage = () => {
    return (
        <div>
            <AdvanceGym></AdvanceGym>
            <ClassSchedule></ClassSchedule>
            <Footer></Footer>
        </div>
    );
};

export default AdvanceGymPage;