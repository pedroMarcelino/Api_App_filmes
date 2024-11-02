import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Detalhes(props) {
    return (
        <View style={s.container} >
            <View style={s.modalContainer}>
                <TouchableOpacity style={s.btnSair} onPress={props.voltar}>
                    <Text style={{ color: '#fff', fontSize: 16 }}>Voltar</Text>
                </TouchableOpacity>

                <Text style={s.titulo}>{props.filmes.nome}</Text>
                <Text style={s.sinopse}>Sinopse: </Text>
                <Text style={s.desc}>{props.filmes.sinopse}</Text>

            </View>
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    modalContainer: {
        width: '85%',
        height: '80%',
        backgroundColor: '#121212',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    btnSair: {
        backgroundColor: '#e52246',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
    },
    titulo: {
        textAlign: "center",
        color: '#fff',
        padding: 10,
        fontSize: 28,
        fontWeight: "bold",
    },
    sinopse: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 8,
        marginLeft: 10,
        marginRight: 10,
    },
    desc: {
        color: '#fff',
        marginLeft: 10,
        marginRight: 10,
    },

});