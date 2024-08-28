public class CifradoCesar {

    public static String encriptarTexto(String texto, int desplazamiento) {
        StringBuilder resultado = new StringBuilder();

        for (int i = 0; i < texto.length(); i++) {
            char c = texto.charAt(i);

            if (Character.isUpperCase(c)) {
                char encriptado = (char) (((c - 'A' + desplazamiento) % 26) + 'A');
                resultado.append(encriptado);
            } else if (Character.isLowerCase(c)) {
                char encriptado = (char) (((c - 'a' + desplazamiento) % 26) + 'a');
                resultado.append(encriptado);
            } else {
                resultado.append(c);
            }
        }

        return resultado.toString();
    }

    public static String desencriptarTexto(String textoEncriptado, int desplazamiento) {
        return encriptarTexto(textoEncriptado, -desplazamiento);
    }

    public static void main(String[] args) {
        String textoOriginal = "Hola Mundo!";
        int desplazamiento = 3;

        String textoEncriptado = encriptarTexto(textoOriginal, desplazamiento);
        System.out.println("Texto encriptado: " + textoEncriptado);

        String textoDesencriptado = desencriptarTexto(textoEncriptado, desplazamiento);
        System.out.println("Texto desencriptado: " + textoDesencriptado);
    }
}
