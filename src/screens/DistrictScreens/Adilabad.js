/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
<<<<<<< HEAD
import getAdilabadAction from '../../redux/actions/getAdilabadAction';
=======
>>>>>>> d6475f5 (district categories)
import CategoryUI from '../../components/CategoryUI';
import { getAdilabadAction } from '../../redux/actions/getAdilabadAction';


const AdilabadScreen = ({
    navigation,
    adilabadData,
    adilabadLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdilabadAction());

    }, []);


    return (
        <CategoryUI
        data = {adilabadData}
        navigation = {navigation}
        title = {route.name}
<<<<<<< HEAD
        categoryName ="adilabad"
=======
        categoryName ="warangal-rural"
>>>>>>> d6475f5 (district categories)
        />
    );
};

type Props = {
    adilabadData: Function,
    adilabadLoading: Boolean,
};
const mapStateToProps = state => ({
    adilabadData: state.adilabadReducer?.adilabadData,
    adilabadLoading: state.adilabadReducer?.adilabadLoading,
});
const mapDispatchToProps = {
    getAdilabadAction,
};
<<<<<<< HEAD
=======

>>>>>>> d6475f5 (district categories)
export default connect(mapStateToProps, mapDispatchToProps)(AdilabadScreen);
