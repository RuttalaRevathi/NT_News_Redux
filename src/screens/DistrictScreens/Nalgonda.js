/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
<<<<<<< HEAD
import getNalgondaAction from '../../redux/actions/getNalgondaAction';
=======
>>>>>>> d6475f5 (district categories)
import CategoryUI from '../../components/CategoryUI';
import { getNalgondaAction } from '../../redux/actions/getNalgondaAction';


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
<<<<<<< HEAD
    nalgondaData: state.nalgondaReducer?.nalgondaData,
    nalgondaLoading: state.nalgondaReducer?.nalgondaLoading,
=======
    nalgondaData: state.nalgondareducer?.nalgondaData,
    nalgondaLoading: state.nalgondareducer?.nalgondaLoading,
>>>>>>> d6475f5 (district categories)
});
const mapDispatchToProps = {
    getNalgondaAction,
};
<<<<<<< HEAD
=======

>>>>>>> d6475f5 (district categories)
export default connect(mapStateToProps, mapDispatchToProps)(NalgondaScreen);
