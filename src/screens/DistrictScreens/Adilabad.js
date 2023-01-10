/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getAdilabadAction from '../../redux/actions/getAdilabadAction';
import CategoryUI from '../../components/CategoryUI';


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
    // share function

    return (
        <CategoryUI
        data = {adilabadData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="adilabad"
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
export default connect(mapStateToProps, mapDispatchToProps)(AdilabadScreen);
