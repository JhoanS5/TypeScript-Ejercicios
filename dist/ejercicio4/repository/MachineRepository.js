"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineRepository = void 0;
class MachineRepository {
    machines = [];
    save(machine) {
        this.machines.push(machine);
    }
    getAll() {
        return this.machines;
    }
}
exports.MachineRepository = MachineRepository;
//# sourceMappingURL=MachineRepository.js.map