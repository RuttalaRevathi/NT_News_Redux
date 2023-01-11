/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
<<<<<<< HEAD
import getKhammamAction from '../../redux/actions/getKhammamAction';
=======
>>>>>>> d6475f5 (district categories)
import CategoryUI from '../../components/CategoryUI';
import { getKhammamAction } from '../../redux/actions/getKhammamAction';


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
<<<<<<< HEAD
=======

>>>>>>> d6475f5 (district categories)
export default connect(mapStateToProps, mapDispatchToProps)(KhammamScreen);
