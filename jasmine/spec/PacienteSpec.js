describe("Paciente", function () {
    it("deve calcular o imc", function () {
        var raoni = new Paciente("Raoni", 29, 114, 1.69);
        expect(raoni.imc()).toEqual(114 / (1.69 * 1.69));
    });
});