/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getNalgondaAction from '../../redux/actions/getNalgondaAction';
import CategoryUI from '../../components/CategoryUI';


const NalgondaScreen = ({
    navigation,
    nalgondaData,
    nalgondaLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNalgondaAction());

    }, []);
    // share function

    return (
        <CategoryUI
        data = {nalgondaData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="nalgonda"
        />
    );
};

type Props = {
    nalgondaData: Function,
    nalgondaLoading: Boolean,
};
const mapStateToProps = state => ({
    nalgondaData: state.nalgondaReducer?.nalgondaData,
    nalgondaLoading: state.nalgondaReducer?.nalgondaLoading,
});
const mapDispatchToProps = {
    getNalgondaAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(NalgondaScreen);
