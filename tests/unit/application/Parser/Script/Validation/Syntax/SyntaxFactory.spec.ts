import 'mocha';
import { SyntaxFactory } from '@/application/Parser/Script/Validation/Syntax/SyntaxFactory';
import { ScriptingLanguage } from '@/domain/ScriptingLanguage';
import { ShellScriptSyntax } from '@/application/Parser/Script/Validation/Syntax/ShellScriptSyntax';
import { ScriptingLanguageFactoryTestRunner } from '@tests/unit/application/Common/ScriptingLanguage/ScriptingLanguageFactoryTestRunner';
import { BatchFileSyntax } from '@/application/Parser/Script/Validation/Syntax/BatchFileSyntax';

describe('SyntaxFactory', () => {
  const sut = new SyntaxFactory();
  const runner = new ScriptingLanguageFactoryTestRunner()
    .expect(ScriptingLanguage.shellscript, ShellScriptSyntax)
    .expect(ScriptingLanguage.batchfile, BatchFileSyntax);
  runner.testCreateMethod(sut);
});
