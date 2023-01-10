/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getKarimnagarAction from '../../redux/actions/getKarimnagarAction';
import CategoryUI from '../../components/CategoryUI';


const KarimnagarScreen = ({
    navigation,
    karimnagarData,
    karimnagarLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getKarimnagarAction());

    }, []);
    // share function

    return (
        <CategoryUI
        data = {karimnagarData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="karimnagar"
        />
    );
};

type Props = {
    karimnagarData: Function,
    karimnagarLoading: Boolean,
};
const mapStateToProps = state => ({
    karimnagarData: state.karimnagarReducer?.karimnagarData,
    karimnagarLoading: state.karimnagarReducer?.karimnagarLoading,
});
const mapDispatchToProps = {
    getKarimnagarAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(KarimnagarScreen);
