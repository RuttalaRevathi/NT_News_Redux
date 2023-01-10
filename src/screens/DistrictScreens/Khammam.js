/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getKhammamAction from '../../redux/actions/getKhammamAction';
import CategoryUI from '../../components/CategoryUI';


const KhammamScreen = ({
    navigation,
    khammamData,
    khammamLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getKhammamAction());

    }, []);
    // share function

    return (
        <CategoryUI
        data = {khammamData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="kammam"
        />
    );
};

type Props = {
    khammamData: Function,
    khammamLoading: Boolean,
};
const mapStateToProps = state => ({
    khammamData: state.khammamReducer?.khammamData,
    khammamLoading: state.khammamReducer?.khammamLoading,
});
const mapDispatchToProps = {
    getKhammamAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(KhammamScreen);
