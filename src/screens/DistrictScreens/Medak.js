/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getMedakAction from '../../redux/actions/getMedakAction';
import CategoryUI from '../../components/CategoryUI';


const MedakScreen = ({
    navigation,
    medakData,
    medakLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMedakAction());

    }, []);
    // share function

    return (
        <CategoryUI
        data = {medakData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="medak"
        />
    );
};

type Props = {
    medakData: Function,
    medakLoading: Boolean,
};
const mapStateToProps = state => ({
    medakData: state.medakReducer?.medakData,
    medakLoading: state.medakReducer?.medakLoading,
});
const mapDispatchToProps = {
    getMedakAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(MedakScreen);
