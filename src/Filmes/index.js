import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import Detalhes from "../Detalhes";

export default function Filmes({ data }) {

    const [visibilidadeModal, setVisibilidade] = useState(false);

    return (
        <View>
            <View style={s.card}>
                <Text style={s.nome}>{data.nome}</Text>
                <Image source={{ uri: data.foto }} style={s.capa} />

                <View style={s.areaBtn}>
                    <TouchableOpacity style={s.btn} onPress={() => { setVisibilidade(true) }}>
                        <Text style={s.txtBtn}>Ver Mais</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <Modal transparent={true} animationType="slide" visible={visibilidadeModal}>
                <Detalhes filmes={data} voltar={() => setVisibilidade(false)} />
            </Modal>
        </View>
    )
}

const s = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        margin: 15,
        elevation: 2,
    },
    nome: {
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold'
    },
    capa: {
        height: 250,
        zIndex: 2
    },
    areaBtn: {
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 3
    },
    btn: {
        width: 100,
        backgroundColor: '#09a6ff',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    txtBtn: {
        color: '#Fff',
        textAlign: 'center'
    }


})